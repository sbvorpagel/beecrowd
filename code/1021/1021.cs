using System;

class URI
{
    static void Main(string[] args)
    {
        double monetary_value;

        monetary_value = double.Parse(Console.ReadLine());

        Console.WriteLine("NOTAS:");
        Console.WriteLine("{0} nota(s) de R$ 100.00", (int)monetary_value / 100);
        monetary_value %= 100;
        Console.WriteLine("{0} nota(s) de R$ 50.00", (int)monetary_value / 50);
        monetary_value %= 50;
        Console.WriteLine("{0} nota(s) de R$ 20.00", (int)monetary_value / 20);
        monetary_value %= 20;
        Console.WriteLine("{0} nota(s) de R$ 10.00", (int)monetary_value / 10);
        monetary_value %= 10;
        Console.WriteLine("{0} nota(s) de R$ 5.00", (int)monetary_value / 5);
        monetary_value %= 5;
        Console.WriteLine("{0} nota(s) de R$ 2.00", (int)monetary_value / 2);
        monetary_value %= 2;
        Console.WriteLine("MOEDAS:");
        Console.WriteLine("{0} moeda(s) de R$ 1.00", (int)monetary_value / 1);
        monetary_value %= 1;
        Console.WriteLine("{0} moeda(s) de R$ 0.50", (int)(monetary_value / 0.50));
        monetary_value %= 0.50;
        Console.WriteLine("{0} moeda(s) de R$ 0.25", (int)(monetary_value / 0.25));
        monetary_value %= 0.25;
        Console.WriteLine("{0} moeda(s) de R$ 0.10", (int)(monetary_value / 0.10));
        monetary_value %= 0.10;
        Console.WriteLine("{0} moeda(s) de R$ 0.05", (int)(monetary_value / 0.05));
        monetary_value %= 0.05;
        Console.WriteLine("{0} moeda(s) de R$ 0.01", (int)(monetary_value / 0.01));
    }
}