/*
1->2->3->4->5
c
1->2->3->4->5
   c
1->2->3->4->5
      c
1->2->3->4->5
         c
1->2->3->4->5
            c
1->2->3->4->5
---
                //prevent destruct
1->2->3->4->5   tmp = c.next.next; (2, 3)  c.next.next = c; c.next.next.next = tmp; (3)
c
2->1->3->4->5   tmp = c.next.next; (3, 4)  c.next.next = c;                             //err 
   c
       2  
        \   
2->1->3->1->5   tmp = c.next.next; (3, 4)  c.next.next = c;                             //err 
   c
3->2->1->4->5
      c
4->3->2->1->5
         c
5->4->3->2->1
            c
---

c
h
1->2->3->4->5  head = head.next;

c
   h
1->2->3->4->5  cur.next = head.next;

h
2->3->4->5     head.next = c;
  /
 1
 c

h  c
2->1->3->4->5  head = c.next;

   c  h
2->1->3->4->5  c.next = head.next;

   h   
   3->4->5
     /
 2->1
    c                               //err h.next should point to 2 but the information has not been preserved

---
---

c
h
1->2->3->4->5          head = head.next;

c
   h
1->2->3->4->5          cur.next = head.next;

h
2->3->4->5             head.next = c;
  /
 1
 c

h  c
2->1->3->4->5           p = h;                //save the information before moving head

p                                       
h  c
2->1->3->4->5           head = c.next;

p
   c  h
2->1->3->4->5           c.next = head.next;

   h   
   3->4->5.             h.next = p;
     /
 2->1
 p   c                              

h. p. c
3->2->1->4->5           p = head;  

p
h.    c
3->2->1->4->5           head = c.next;  

p
      c  h
3->2->1->4->5           c.next = head.next;



        h
         4->5           head.next = p;
           /
    3->2->1
    p     c

h. p     c 
4->3->2->1->5.          p = head;

p
h.       c 
4->3->2->1->5           head = c.next;

p
         c  h
4->3->2->1->5->N        c.next=head.next;

               h
               5->N     head.next=p;
              /
    4->3->2->1
    p        c
h. p.       c
5->4->3->2->1->N.      //terminate when c.next is null

//Algorithm summarray
while c.next 
    p = head;
    head = c.next;
    c.next = head.next;
    head.next = p;
    
*/

#include <stdlib.h>
#include <unistd.h>

/*
** Define LL Node
*/

typedef struct s_node {
   int value;
   struct s_node *next;
}             t_node;

/*
** Create Node
*/

t_node *create_node(int value, t_node *next) {
   t_node *node;

   node = (t_node*)malloc(sizeof(t_node));
   node->value = value;
   node->next = next;

   return node;   
}

/*
** Define Reverse List
*/

t_node *reverse_list(t_node *head) {
   t_node *cur;
   t_node *prev;
   
   cur = head;
   while (cur->next) {
      prev = head;
      head = cur->next;
      cur->next = head->next;
      head->next = prev;
   }
   return head;
}

/*
** put char
*/
void f_putchar(char c) {
   write(1, &c, 1);
}

/*
** put number
*/

void f_putnbr(int n) {
   int w;
   int tmp;

   tmp = n;
   w = 1;
   while (tmp) {
      tmp /= 10;
      w *= 10;
   }

   while (w) {
      int d = (n / w) % 10;
      f_putchar((char)(d + 48));
      w /= 10;
   }
}

/*
** put string
*/
void f_putstr(char *s) {
   int i;

   i = 0;
   while (*(s + i)){
      f_putchar(*(s + i));
      i++;
   }
}

/*
** print list
*/
void put_list(t_node *head){
   t_node *cur;

   cur = head;
   while (cur) {
      f_putnbr(cur->value);
      f_putstr("->");
      cur = cur->next;
   }
   f_putstr("NULL\n");
}

int main (void) {
   /*
   ** Create List
   */
   t_node *head;

   head = create_node(1,
        create_node(2, 
            create_node(3,
                create_node(4, 
                    NULL
                )
            )
        )
   );
   
   /*
   ** Print List
   */
   put_list(head);

   /*
   ** Reverse List
   */
   put_list(reverse_list(head));
   
   return (0);
}