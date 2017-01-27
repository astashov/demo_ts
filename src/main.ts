import * as imm from "immutable";
import {Set} from "immutable";

function zap(): Set<number> {
  return Set.of(3);
}

class Apple {
  public foo(): number {
    return 3;
  }
}

class Biggie extends Apple {
  public foo(): number {
    return super.foo() + 4;
  }
}

function bar(): imm.List<number> {
  return imm.List.of(2,3,4);
}

function main(): void {
  const a = new Apple();
  console.log(a.foo());
}
