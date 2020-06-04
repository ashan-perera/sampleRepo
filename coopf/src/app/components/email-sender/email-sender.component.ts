import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/email';
import { CoopzService } from 'src/app/services/coopz.service';
import { ThrowStmt } from '@angular/compiler';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmationDialog } from 'src/app/shared/confirmation-dialog';

@Component({
  selector: 'app-email-sender',
  templateUrl: './email-sender.component.html',
  styleUrls: ['./email-sender.component.scss']
})
export class EmailSenderComponent implements OnInit {

  email: Email = new Email();
  dialogRef: MatDialogRef<ConfirmationDialog>;

  constructor(private coopzService: CoopzService,
              public dialog: MatDialog) { }

  ngOnInit() {
  }

  openConfirmationDialog(email): void {

    this.dialogRef = this.dialog.open(ConfirmationDialog, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to send this email?"
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.sendEmail(email);
      }
      this.dialogRef = null;
    });

  }

  sendEmail(email): void {
    this.coopzService.sendEmail(email).subscribe((data: any) => {
      
    });
  }

}
