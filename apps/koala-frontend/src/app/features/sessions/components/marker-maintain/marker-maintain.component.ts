import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MarkerType } from '../../../../graphql/generated/graphql';
import { MarkerService } from '../../services/marker.service';

@Component({
  selector: 'koala-marker-maintain',
  templateUrl: './marker-maintain.component.html',
  styleUrls: [
    './marker-maintain.component.scss',
    '../../session-common.scss',
  ],
})
export class MarkerMaintainComponent {
  @Input() markerDataForm!: FormGroup;

  markerTypes = [
    {
      type: MarkerType.Event,
      name: 'Event',
    },
    {
      type: MarkerType.Range,
      name: 'Range',
    },
  ];

  icons = this.markerService.getAllIcons();
  selectedIcon = 0;
  selectedMarkerType = 0;
  color = '';
  abbreviation = '';

  MarkerType = MarkerType;

  get markerType() {
    return this.markerDataForm.get('type')?.value;
  }

  constructor(private readonly markerService: MarkerService) {}
}
