import React from 'react'
import { Container, Navbar, Button, NavbarBrand, Progress } from 'reactstrap'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar className={styles.navbarStyle}
        expand="md"
        dark >
        <NavbarBrand href="/" >
          ReactstraProject
        </NavbarBrand>
      </Navbar>

      <Container>
      <Progress value={50} color="danger" className={styles.progressBarStyle}/>
        <div className={styles.boxStyle}>
          Conteúdo
        </div>
        <div className={styles.buttonsStyle}>
        <Button className={styles.buttonStyle}>
            Anterior
          </Button>
          <Button className={styles.buttonStyle}>
            Próximo
          </Button>
        </div>
      </Container>
    </>
  )
}
