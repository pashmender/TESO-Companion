function GetExample(prLangName) {
    var name = (prLangName.split(" ")[0]).toLowerCase()
    switch (name) {
        case "c":
        case "c++":
            return `#include <iostream>
using namespace std;
int main() {
    int a, b;
    cin>>a>>b;
    cout<<a+b;
}`;
        case "c#":
            return `using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 
namespace ConsoleApplication8
{
    class Program
    {
        static void Main(string[] args)
        {
            //Read line, and split it by whitespace into an array of strings
            string[] tokens = Console.ReadLine().Split();
            
            //Parse element 0
            int a = int.Parse(tokens[0]);
            
            //Parse element 1
            int b = int.Parse(tokens[1]);
            int c = a + b;
            Console.WriteLine(c.ToString());
         }
    }
}`;
        case "java":
            return `/* package whatever; // don't place package name! */
import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Main
{
	public static void main (String[] args) throws java.lang.Exception
	{
		Scanner sc = new Scanner(System.in);

        int a, b, c;

        a = sc.nextInt();//Считываем первое число

        b = sc.nextInt();//Считываем второе число

        c = a + b;

        System.out.println(c);
	}
}`;
        case "python":
        case "python3":
            return `a, b = input().strip().split(' ')
print (int(a) + int(b))`;
        case "python2":
            return `a, b = raw_input().strip().split(' ')
print (int(a) + int(b))`;
        case "pascal":
            return `procedure sum(a,b:integer;var c:integer);
begin
    c:=a+b;
end;
var a,b,c:integer;
begin
    readln(a,b);
    sum(a,b,c);
    write(c);
end.`;
        default:
            return "";
    }
}