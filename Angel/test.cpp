#include <iostream>
using namespace std;

int main(){
    string generation_tag_list[4] = {"z_Generation", "m_Generation", "x_Generation", "b_Generation"};
    string using_habit_tag_list[4] = {"message_AND_call", "web_AND_sns", "video_content"};
    
    int user_select;
    bool use_unlimit_plan;
    string select_options;

    if(generation_tag_list[user_select] == "z_Generation"){
        if(using_habit_tag_list[user_select] == "message_AND_call"){
            select_options = "message_AND_call_unlimit";
        }
        else if(using_habit_tag_list[user_select] == "web_AND_sns"){
            cout << "무제한 요금제 사용한다면 1, 사용하지 않는다면 0";
            cin >> use_unlimit_plan;
            if(use_unlimit_plan){
                select_options = "1_to_3_Mbps";
            }
            else select_options = "under_5GB_one_month";
        }
    }
}