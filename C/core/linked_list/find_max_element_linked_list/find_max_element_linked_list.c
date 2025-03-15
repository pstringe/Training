#include <unistd.h>
#include <std.lib>

/*
** define node
*/
typedef struct  s_node {
    value:  int;
    next:   struct s_node;
}               t_node;

/*
** create node
*/
t_node *create_node(value, next) { 
    t_node *node;

    node = (t_node*)malloc(sizeof(t_node*));
    node->value = value;
    node->next = next;

    return node;
}

/*
** return max value
*/
int max(v0, v1){
    if (v0 > v1) {
        return v0;
    }
    return v1;
}

/*
** def find max element
*/
t_node *find_max_element(t_node *head) {
    t_node *cur;
    t_node *max;

    max = NULL;
    cur = head;
    while (cur) {
        int max_value;

        max_value = max ? max(cur->value, max->value) : -1;
        if (cur->value == max_value) {
            max = cur;
        }
        cur = cur->next;
    }
    return max;
}

// TODO
//- [ ] implement f_putnbr
//- [ ] lookup reference for variadic arguments
//- [ ] lookup representation of infinity

int main (void) {
    
    t_node max;
    /*
    ** create list
    */
    t_node *list;
    list = create_node(
        1,
        create_node(
            2,
            create_node(
                3,
                create_node(
                    4,
                    NULL
                )
            )
        )
    );

    /*
    ** find max element in list
    */
    max = find_max_element(list);

    /*
    ** test
    */
    f_putnbr(max->value);

    return 0;   
}