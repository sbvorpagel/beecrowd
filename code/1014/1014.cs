using System;

class URI
{
    static void Main(string[] args)
    {
        int distance_in_km;
        double spent_fuel;

        int.TryParse(Console.ReadLine(), out distance_in_km);
        double.TryParse(Console.ReadLine(), out spent_fuel);

        Console.WriteLine("{0:0.000} km/l", CalculateAverageConsumption(distance_in_km, spent_fuel));
    }

    static double CalculateAverageConsumption(int distance_in_km, double spent_fuel)
    {
        return distance_in_km / spent_fuel;
    }
}