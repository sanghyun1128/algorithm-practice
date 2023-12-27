#include <iostream>
#include <string>
#include <list>

using namespace std;

int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);

    string txt;
    int m;
    cin >> txt;

    list<char> txt_list(txt.begin(), txt.end());

    list<char>::iterator cursor = txt_list.end();

    cin >> m;
    for (int i = 0; i < m; i++)
    {
        char cmd;
        cin >> cmd;

        if (cmd == 'L')
        {
            if (cursor != txt_list.begin())
                cursor--;
        }
        else if (cmd == 'D')
        {
            if (cursor != txt_list.end())
                cursor++;
        }
        else if (cmd == 'B')
        {
            if (cursor != txt_list.begin())
            {
                cursor--;
                cursor = txt_list.erase(cursor);
            }
        }
        else if (cmd == 'P')
        {
            char c;
            cin >> c;
            txt_list.insert(cursor, c);
        }
    }

    for (cursor = txt_list.begin(); cursor != txt_list.end(); cursor++)
        cout << *cursor;
    cout << '\n';
}