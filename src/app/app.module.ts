// Modules
import * as $ from "jquery";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { routing, appRoutingProviders } from "./app.routing";
import { MomentModule } from "angular2-moment";
import { HttpModule } from "@angular/http";

// Module Custom
import { MessagesModule } from "./messages/messages.module";

// Components
import { AppComponent } from "./app.component";

// Services
import { UserService } from "./services/user.service";
import { UserGuard } from "./services/user.guard";

@NgModule({
  declarations: [AppComponent],
  imports: [],
  providers: [appRoutingProviders, UserService, UserGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
