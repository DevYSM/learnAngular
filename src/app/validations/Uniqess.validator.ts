import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UniqessValidation {
  static exist(
    control: AbstractControl
  ): Promise<ValidationErrors> | null {
    // Sumulation to time = execute to the process
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'admin@admin.com') {
          resolve({ exist: true });
        } else {
          reject(null);
        }
      }, 1000);
    });
  }
}
