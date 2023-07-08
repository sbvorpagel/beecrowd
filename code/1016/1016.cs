using System;

class URI
{


  static void Main(string[] args)
  {
    int distance_in_km;
    int.TryParse(Console.ReadLine(), out distance_in_km);
    Console.WriteLine("{0} minutos", distance_in_km * 2);
  }
}