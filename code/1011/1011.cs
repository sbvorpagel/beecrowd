using System;

class URI
{
    static void Main(string[] args)
    {
        double R;
        const double PI = 3.14159;
        double.TryParse(Console.ReadLine(), out R);
        double volume = (4d/3d) * PI * (Math.Pow(R, 3));
        Console.WriteLine("VOLUME = " + volume.ToString("0.000"));
    }
}