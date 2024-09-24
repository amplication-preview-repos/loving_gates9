import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Vmal0ServiceBase } from "./base/vmal0.service.base";

@Injectable()
export class Vmal0Service extends Vmal0ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
