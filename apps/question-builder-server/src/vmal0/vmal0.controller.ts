import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Vmal0Service } from "./vmal0.service";
import { Vmal0ControllerBase } from "./base/vmal0.controller.base";

@swagger.ApiTags("vmal0s")
@common.Controller("vmal0s")
export class Vmal0Controller extends Vmal0ControllerBase {
  constructor(protected readonly service: Vmal0Service) {
    super(service);
  }
}
