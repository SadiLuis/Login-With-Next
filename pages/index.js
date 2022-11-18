import { auth } from "./Firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect } from 'react'
import { Button , Flex, Stack, Box, Text } from '@chakra-ui/react'

export default function Home() {

  const [ user , setUser ] = useAuthState(auth)

  const GoogleAuth = new GoogleAuthProvider()//Creamos un nuevo googleAuth -> instancia

const handleLogin = async () => {
    const result = await signInWithPopup(auth, GoogleAuth);

    console.log(user)
  };

 
  const handleLogout = async () => {
    const logout = await auth.signOut()
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box
          rounded={'xl'}
          boxShadow={'xl'}
          p={8}>
          <Text onClick={() => handleLogout() }> 
            { user? 
              <Text fontSize='3xl' > Welcome {user.displayName + " " + user.email } </Text>        
            : <Text fontSize='2xl' > Please Login </Text>  
            }
          </Text>
          <Stack spacing={4}>
            <Stack spacing={10}>
              <Button
              onClick={() => handleLogin()}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in with Google
              </Button>

            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
