export const event = {
  message: "Welcome to the party!",
  guests: [
    { name: "John", age: 18, email: "some1@email.com" },
    { name: "Anna", age: 5, email: "some2@email.com" },
    { name: "Dan", age: 23, email: "some3@email.com" },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => {
        return {
          email,
          message: `Dear ${name}! ${this.message}`,
        };
      });
  },
};

console.log(event.getInvitations());
