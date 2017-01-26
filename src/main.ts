import * as imm from "immutable";

class Apple {
  public foo(): number {
    return 3;
  }
}

class Smallie extends Apple {
  public bar(): number {
    return 8;
  }
}

function bar(): imm.List<number> {
  return imm.List.of(2,3,4);
}

function main(): void {
  const a = new Apple();
  console.log(a.foo());
}
