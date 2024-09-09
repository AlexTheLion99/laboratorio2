function createUser(name: string, ci: string, email: string) {
    return {
      name,
      ci,
      email
    };
  }
  
  // Ejemplo de uso
  const user = createUser("Alice", "123456789", "alice@example.com");
  console.log(user);
  