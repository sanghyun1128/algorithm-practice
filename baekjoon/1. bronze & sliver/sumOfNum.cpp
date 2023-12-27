#include <iostream>

using namespace std;

int main(void)
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);

    int n;
    bool arr[1000001];
    int x;

    cin >> n;
    int tmp;
    for (int i = 0; i < n; i++)
    {
        cin >> tmp;
        arr[tmp] = true;
    }
    cin >> x;

    int count = 0;
    if (x > 1000000)
        for (int i = x - 1000000; i <= 1000000; i++)
        {
            if (arr[i] && arr[x - i])
                count++;
        }
    else
    {
        for (int i = 1; i <= x / 2; i++)
        {
            if (arr[i] && arr[x - i])
                count++;
        }
    }
    if (x % 2 == 0 && arr[x / 2])
        count--;

    cout << count << endl;
}