import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // debugger;
  console.log("auth guard...");
  // const token = localStorage.getItem('token');
  // console.log("token", token);
  let token = "op";
  const _router = inject(Router);

  if (token != null) {
    _router.navigateByUrl('dashboard');
    return true
  } else {
    _router.navigateByUrl('login');
    return false;
  }
};
