using System;

class URI
{
  static void Main(string[] args)
  {
    double num1, num2, num3;
    const double num1Weight = 2;
    const double num2Weight = 3;
    const double num3Weight = 5;

    double.TryParse(Console.ReadLine(), out num1);
    double.TryParse(Console.ReadLine(), out num2);
    double.TryParse(Console.ReadLine(), out num3);

    double weightedAverage = ((num1 * num1Weight) + (num2 * num2Weight) + (num3 * num3Weight)) / (num1Weight + num2Weight + num3Weight);
    Console.WriteLine("MEDIA = " + weightedAverage.ToString("0.0"));
  }
}