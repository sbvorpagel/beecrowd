using System;

class URI
{
  static void Main(string[] args)
  {
    const double pi = 3.14159;
    double num;
    double.TryParse(Console.ReadLine(), out num);
    Console.WriteLine("A=" + (pi * num * num).ToString("0.0000"));
  }
}