using System;

class URI
{
    static void Main(string[] args)
    {
        int number_of_unit1, number_of_unit2;
        double price_per_unit1, price_per_unit2;
        decimal total_value;
        
        string[] line1 = Console.ReadLine().Split(' ');
        string[] line2 = Console.ReadLine().Split(' ');
    
        int.TryParse(line1[1], out number_of_unit1);
        int.TryParse(line2[1], out number_of_unit2);

        double.TryParse(line1[2], out price_per_unit1);
        double.TryParse(line2[2], out price_per_unit2);

        total_value = Math.Round((decimal)((number_of_unit1 * price_per_unit1) + (number_of_unit2 * price_per_unit2)), 2, MidpointRounding.ToEven);
        
        Console.WriteLine("VALOR A PAGAR: R$ " + total_value.ToString("0.00"));    
    }
}