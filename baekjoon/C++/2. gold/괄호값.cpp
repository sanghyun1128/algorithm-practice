#include <iostream>
#include <stack>
#include <string>

using namespace std;

int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);

    string str;
    cin >> str;

    int result = 0;
    int tmp = 1;
    stack<char> s;

    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] == '(')
        {
            s.push(str[i]);
            tmp *= 2;
        }
        else if (str[i] == '[')
        {
            s.push(str[i]);
            tmp *= 3;
        }
        else
        {
            if (s.empty())
            {
                cout << 0 << '\n';
                return 0;
            }
            if (str[i] == ')')
            {
                if (str[i - 1] == '(')
                {
                    s.pop();
                    result += tmp;
                    tmp /= 2;
                }
                else if (s.top() == '(')
                {
                    s.pop();
                    tmp /= 2;
                }
                else
                {
                    cout << 0 << '\n';
                    return 0;
                }
            }
            else if (str[i] == ']')
            {
                if (str[i - 1] == '[')
                {
                    s.pop();
                    result += tmp;
                    tmp /= 3;
                }
                else if (s.top() == '[')
                {
                    s.pop();
                    tmp /= 3;
                }
                else
                {
                    cout << 0 << '\n';
                    return 0;
                }
            }
        }
    }

    if (!s.empty())
    {
        cout << 0 << '\n';
        return 0;
    }
    else
    {
        cout << result << '\n';
    }
}