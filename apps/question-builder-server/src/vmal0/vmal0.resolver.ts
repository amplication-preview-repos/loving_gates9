import * as graphql from "@nestjs/graphql";
import { Vmal0ResolverBase } from "./base/vmal0.resolver.base";
import { Vmal0 } from "./base/Vmal0";
import { Vmal0Service } from "./vmal0.service";

@graphql.Resolver(() => Vmal0)
export class Vmal0Resolver extends Vmal0ResolverBase {
  constructor(protected readonly service: Vmal0Service) {
    super(service);
  }
}
