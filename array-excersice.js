// Exercise #1

const people = ['Sofia', 'David', 'Juan'];

// Part 2
people.push('Sara', 'Augustin');
people.shift();

console.log(people) //[ 'David', 'Juan', 'Sara', 'Augustin' ]

// Part 3
people.splice(1,0,'Renata');
people.push('Elena')

console.log(people)//[ 'David', 'Renata', 'Juan', 'Sara', 'Augustin', 'Elena' ]

