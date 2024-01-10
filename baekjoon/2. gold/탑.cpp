#include <iostream>
#include <stack>
#include <vector>

using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int n;
    int result[500001];
    cin >> n;
    stack<pair<int, int>> s;
    for (int i = 0; i < n; i++)
    {
        int tmp;
        cin >> tmp;

        if (i == 0)
        {
            s.push(pair(tmp, i + 1));
            result[i + 1] = 0;
            continue;
        }

        while (!s.empty() && s.top().first < tmp)
        {
            s.pop();
        }

        if (s.empty())
        {
            s.push(pair(tmp, i + 1));
            result[i + 1] = 0;
        }
        else
        {
            result[i + 1] = s.top().second;
            s.push(pair(tmp, i + 1));
        }
    }

    for (int i = 1; i <= n; i++)
    {
        cout << result[i] << ' ';
    }
}