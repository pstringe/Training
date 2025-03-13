#include <stdlib.h>
#include <unistd.h>

typedef struct  s_node {
    void*          data;
    struct s_node   *next;  
}               t_node;

void *f_memcpy(void *src, void *dst, size_t n) {
    size_t i;

    i = 0;
    while (i < n) {
        *((char*)dst + i) = *((char *)src + i);
        i++;
    }
    return dst;
}

t_node *create_node(void* data, size_t n) {
    t_node  *node;
    void    *node_data;

    node = (t_node*)malloc(sizeof(t_node));
    node_data = (char*)malloc(n * sizeof(char) + 1);
    node->data = node_data;
    f_memcpy(data, node->data, n);
    ((char*)(node->data))[n] = '\0';
    node->next= NULL;

    return (node);
}

void f_putchar(char c){
    write(1, &c, 1);
}

void f_putstr(char *s){
    int i;

    i = 0;
    while (*(s + i)) {
        f_putchar(*(s + i));
        i++;
    }
}

int main(void) {
    t_node *node;

    node = create_node("hi", 2);
    f_putstr(node->data);
    return 0;
}
