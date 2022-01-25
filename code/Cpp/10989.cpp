// #include <algorithm>
#include <iostream>
// #include <string>
// #include <vector>
using namespace std;

int main() {
    // int N = 0;
    // cin >> N;
    // string ret = "";

    // vector<int> v;
    // for (int i = 0; i < N; i++) {
    //     int a = 0;
    //     cin >> a;
    //     v.push_back(a);
    // }
    // sort(v.begin(), v.end());
    // for (int i = 0; i < N; i++) {
    //     ret.append(to_string(v[i]));
    //     if (i < N - 1)
    //         ret.append("\n");
    // }
    // cout << ret;
    // return 0;
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int N, temp;
    cin >> N;

    int arr[10001] = {0};

    for (int i = 0; i < N; i++) {
        cin >> temp;
        arr[temp] += 1;
    }

    // 각 숫자를 개수만큼 출력해주기
    for (int i = 1; i <= 10000; i++)
        for (int j = 0; j < arr[i]; j++)
            cout << i << "\n";
    return 0;
}
