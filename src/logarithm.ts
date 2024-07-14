import type Decimal from "break_eternity.js";
import { Notation } from "./notation";

export class LogarithmNotation extends Notation {
  public get name(): string {
    return "Logarithm";
  }

  public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
    const log10 = value.log10().toNumber();
    return `e${this.formatExponent(log10, places, (n, p) => n.toFixed(p), placesExponent)}`;
  }
}
