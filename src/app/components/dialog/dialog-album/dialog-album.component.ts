import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray
} from '@angular/cdk/drag-drop';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import {
  FormsModule,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormArray,
  FormGroup
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectArtistsList } from '@store/selectors';
import { Album, Song } from '@models/artist';
interface IDialogAlbumComponent {
  data: Album;
  editMode: boolean;
}
@Component({
  selector: 'app-dialog-album',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatDialogTitle,
    MatButton,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    CdkDropList,
    CdkDrag
  ],
  templateUrl: './dialog-album.component.html',
  styleUrl: './dialog-album.component.scss'
})
export class DialogAlbumComponent implements OnInit {
  fb = inject(FormBuilder);
  store = inject(Store);
  dialogRef = inject(MatDialogRef<DialogAlbumComponent>);
  artistList$ = this.store.select(selectArtistsList);

  constructor(@Inject(MAT_DIALOG_DATA) public props: IDialogAlbumComponent) {}

  form: FormGroup = this.fb.group({
    id: [''],
    name: ['', [Validators.required]],
    title: ['', [Validators.required, Validators.minLength(3)]],
    images: ['', [Validators.required, Validators.pattern('https?://.+')]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    songs: this.fb.array([
      this.fb.group({
        title: ['', Validators.required],
        duration: [
          '',
          [Validators.required, Validators.pattern('^[0-9]+:[0-5][0-9]$')]
        ]
      })
    ])
  });

  get songsFields() {
    return this.form.get('songs') as FormArray;
  }

  addNewSong() {
    const songs = this.form.get('songs') as FormArray;

    songs.push(
      this.fb.group({
        title: ['', Validators.required],
        duration: ['', [Validators.pattern('^[0-9]+:[0-5][0-9]$')]]
      })
    );
  }

  removeSong(index: number) {
    const songs = this.form.get('songs') as FormArray;

    songs.removeAt(index);
  }

  onFormSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    this.dialogRef.close(this.form.getRawValue());
  }
  drop(event: CdkDragDrop<Song[]>) {
    moveItemInArray(
      this.songsFields.controls,
      event.previousIndex,
      event.currentIndex
    );

    const newSongsOrder = [...this.songsFields.value];
    moveItemInArray(newSongsOrder, event.previousIndex, event.currentIndex);

    this.songsFields.patchValue(newSongsOrder);
  }

  ngOnInit() {
    if (this.props.data) {
      const songsFormArray = this.fb.array(
        this.props.data.songs.map((song) => this.fb.group(song))
      );

      this.form.setControl('songs', songsFormArray);
      this.form.patchValue({
        ...this.props.data,
        songs: songsFormArray.value
      });

      this.form.controls['name'].disable();
    }
  }
}
