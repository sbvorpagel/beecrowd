using System;

class URI
{
    static void Main(string[] args)
    {
        const double average_km_per_liter = 12f;
        double spent_time_in_hours, average_speed_in_km_per_hour;

        double.TryParse(Console.ReadLine(), out spent_time_in_hours);
        double.TryParse(Console.ReadLine(), out average_speed_in_km_per_hour);

        Console.WriteLine("{0:0.000}", CalculateSpentFuel(spent_time_in_hours, average_speed_in_km_per_hour, average_km_per_liter));
    }

    private static double CalculateSpentFuel(double spent_time_in_hours, double average_speed_in_km_per_hour, double average_km_per_liter)
    {
        return (spent_time_in_hours * average_speed_in_km_per_hour) / average_km_per_liter;
    }
}