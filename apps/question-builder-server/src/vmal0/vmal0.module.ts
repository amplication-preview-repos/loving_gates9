import { Module } from "@nestjs/common";
import { Vmal0ModuleBase } from "./base/vmal0.module.base";
import { Vmal0Service } from "./vmal0.service";
import { Vmal0Controller } from "./vmal0.controller";
import { Vmal0Resolver } from "./vmal0.resolver";

@Module({
  imports: [Vmal0ModuleBase],
  controllers: [Vmal0Controller],
  providers: [Vmal0Service, Vmal0Resolver],
  exports: [Vmal0Service],
})
export class Vmal0Module {}
