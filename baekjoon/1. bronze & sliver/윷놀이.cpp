#include <iostream>

using namespace std;

void throwing();

int main()
{
    for (int i = 0; i < 3; i++)
        throwing();
}

void throwing()
{
    int count = 0;

    for (int i = 0; i < 4; i++)
    {
        int tmp;
        cin >> tmp;
        if (tmp == 1)
            count++;
    }

    if (count == 0)
        cout << "D";
    else if (count == 1)
        cout << "C";
    else if (count == 2)
        cout << "B";
    else if (count == 3)
        cout << "A";
    else
        cout << "E";

    cout << endl;
}