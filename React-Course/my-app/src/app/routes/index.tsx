import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import { DashboardPage } from "../pages";
import {LoginMain} from "../pages";
import { LoginUseCallback } from "../pages/loginUseCallback/LoginCallback";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/login-page" element={<LoginMain />} />
                <Route path="/login-use-callback" element={<LoginUseCallback />} />
                <Route path="/home-page" element={<DashboardPage />} />


                <Route path="*" element={<Navigate to="/home-page"/>} />

            </Switch>
        </BrowserRouter>
    );
}