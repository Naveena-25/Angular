import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { RoutingGuardService } from './routing-guard.service';
import { Observable } from 'rxjs';
import { Url } from 'url';
@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate {

    constructor(private routingGuardService: RoutingGuardService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.routingGuardService.isLoggedIn()) {
            return true;
        } else {
            return false;

        }
    }

}