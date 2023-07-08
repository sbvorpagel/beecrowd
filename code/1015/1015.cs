using System;

class URI
{
    static void Main(string[] args)
    {
        string line1, line2;
        double x1, y1, x2, y2;
        line1 = Console.ReadLine();
        line2 = Console.ReadLine();
        string[] values1 = line1.Split(' ');
        string[] values2 = line2.Split(' ');
        double.TryParse(values1[0], out x1);
        double.TryParse(values1[1], out y1);
        double.TryParse(values2[0], out x2);
        double.TryParse(values2[1], out y2);

        Console.WriteLine("{0:0.0000}", CalculateDistanceBetweenTwoPoints(x1, y1, x2, y2));
    }

    static double CalculateDistanceBetweenTwoPoints(double x1, double y1, double x2, double y2)
    {
        return Math.Sqrt(Math.Pow((x2 - x1), 2) + Math.Pow((y2 - y1), 2));
    }
}