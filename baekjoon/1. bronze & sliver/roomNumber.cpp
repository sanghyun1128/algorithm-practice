#include <iostream>

using namespace std;

int main(void)
{
    int n;
    cin >> n;

    int arr[10] = {
        0,
    };
    int count = 0;
    while (n != 0)
    {
        arr[n % 10]++;
        n /= 10;
    }

    int max = 0;
    for (int i = 0; i < 10; i++)
    {
        if (i == 6 || i == 9)
            continue;
        if (max < arr[i])
            max = arr[i];
    }
    int sixNine = (arr[6] + arr[9] + 1) / 2;
    if (max < sixNine)
        max = sixNine;

    cout << max << '\n';

    return 0;
}