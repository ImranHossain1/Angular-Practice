import { CanDeactivateFn } from '@angular/router';
import { CustomerComponent } from '../common/customer/customer.component';

export const authDGuard: CanDeactivateFn<CustomerComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.canNavigate();
};
