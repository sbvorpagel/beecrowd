using System;

class URI {
    static void Main(string[] args) {
        int worked_number, worked_hours_amount;
        double worked_hours_value;
        double salary;

        int.TryParse(Console.ReadLine(), out worked_number);
        int.TryParse(Console.ReadLine(), out worked_hours_amount);
        double.TryParse(Console.ReadLine(), out worked_hours_value);

        salary = worked_hours_amount * worked_hours_value;

        Console.WriteLine("NUMBER = " + worked_number);
        Console.WriteLine("SALARY = U$ " + salary.ToString("0.00"));
    }
}