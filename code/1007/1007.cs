using System;

class URI {
  static void Main(string[] args) {
    int num1, num2, num3, num4;
    int.TryParse(Console.ReadLine(), out num1);
    int.TryParse(Console.ReadLine(), out num2);
    int.TryParse(Console.ReadLine(), out num3);
    int.TryParse(Console.ReadLine(), out num4);
    int diff = (num1 * num2) - (num3 * num4);
    Console.WriteLine("DIFERENCA = " + diff);
  }
}