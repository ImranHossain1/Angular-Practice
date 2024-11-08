import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  if (route.url.length > 0) {
    let menu = route.url[0].path;
    if (menu === 'about') {
      alert('You do not have access');
      // router.navigate(['about']);
      router.navigateByUrl('/customer');
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};
