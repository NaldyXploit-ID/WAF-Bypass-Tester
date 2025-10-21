#include <iostream>
#include <ctime>
int main(){
  std::time_t t = std::time(nullptr);
  std::cout << "Project: ${REPO_NAME}" << std::endl;
  std::cout << "Time: " << std::ctime(&t);
  return 0;
}
