// 아니 이거 왜 시간 초과남? 뭘 더 어떻게 해야 되지

#include <iostream>

using namespace std;

struct node
{
    char data;
    node *next;
    node *prev;
};

class linkedList
{
public:
    node *head;
    node *tail;
    int size;

    linkedList()
    {
        head = NULL;
        tail = NULL;
        size = 0;
    }
    void push_back(char data)
    {
        node *newNode = new node;
        newNode->data = data;
        newNode->next = NULL;
        newNode->prev = NULL;
        if (head == NULL)
        {
            head = newNode;
            tail = newNode;
        }
        else
        {
            newNode->prev = tail;
            tail->next = newNode;
            tail = newNode;
        }
        size++;
    }
    void push_front(char data)
    {
        node *newNode = new node;
        newNode->data = data;
        newNode->next = NULL;
        newNode->prev = NULL;
        if (head == NULL)
        {
            head = newNode;
            tail = newNode;
        }
        else
        {
            newNode->next = head;
            head->prev = newNode;
            head = newNode;
        }
        size++;
    }
    void insertNode(int index, char data)
    {
        if (index == 0 || size == 0)
        {
            push_front(data);
        }
        else if (index == size)
        {
            push_back(data);
        }
        else
        {
            node *newNode = new node;
            newNode->data = data;
            newNode->next = NULL;
            newNode->prev = NULL;
            node *cur = head;
            for (int i = 0; i < index; i++)
            {
                cur = cur->next;
            }
            newNode->next = cur;
            newNode->prev = cur->prev;
            cur->prev->next = newNode;
            cur->prev = newNode;
            size++;
        }
    }
    void deleteNode(int index)
    {
        index -= 1;
        if (index < 0 || index >= size)
        {
            // Invalid index, do nothing
            return;
        }
        else if (index == 0)
        {
            // Deleting the first node
            node *cur = head;
            head = head->next;
            if (head != nullptr)
            {
                head->prev = nullptr;
            }
            else
            {
                // If the list becomes empty
                tail = nullptr;
            }
            delete cur;
        }
        else if (index == size - 1)
        {
            // Deleting the last node
            node *cur = tail;
            tail = tail->prev;
            tail->next = nullptr;
            delete cur;
        }
        else
        {
            // Deleting a node in the middle
            node *cur = head;
            for (int i = 0; i < index; i++)
            {
                cur = cur->next;
            }
            cur->prev->next = cur->next;
            cur->next->prev = cur->prev;
            delete cur;
        }
        size--;
    }
};

int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);

    int n;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        string str;
        cin >> str;
        linkedList list;
        int index = 0;
        for (int j = 0; j < str.length(); j++)
        {
            if (str[j] == '<')
            {
                if (index > 0)
                {
                    index--;
                }
            }
            else if (str[j] == '>')
            {
                if (index < list.size)
                {
                    index++;
                }
            }
            else if (str[j] == '-')
            {
                if (index > 0)
                {
                    list.deleteNode(index);
                    index--;
                }
            }
            else
            {
                list.insertNode(index, str[j]);
                index++;
            }
        }

        for (int j = 0; j < list.size; j++)
        {
            cout << list.head->data;
            list.head = list.head->next;
        }
        cout << endl;
    }
    return 0;
}