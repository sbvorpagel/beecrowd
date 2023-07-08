using System;

class URI 
{
  static void Main(string[] args) 
  {
    double num1, num2;
    const double num1Weight = 3.5;
    const double num2Weight = 7.5;
    double.TryParse(Console.ReadLine(), out num1);
    double.TryParse(Console.ReadLine(), out num2);

    double weightedAverage = ((num1 * num1Weight) + (num2 * num2Weight)) / (num1Weight + num2Weight);
    Console.WriteLine("MEDIA = " + weightedAverage.ToString("0.00000"));
  }
}