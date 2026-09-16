'use client'
import React from 'react'

/* ============================================================
   URUTAN UNCOMMENT (lakukan dari atas ke bawah, jangan loncat):

   IMPORT:
   1. STEP A - Container, Box, Typography
   2. STEP B - Avatar, Card, CardContent
   3. STEP C - Button, IconButton, EditIcon
   4. STEP D - Stack, Grid, Chip, Divider
   5. STEP E - useState (dibutuhkan untuk pseudo action)

   JSX (di dalam komponen, ganti <div>Profile</div>):
   6. STEP A-JSX - render Container + Box + Typography
   7. STEP B-JSX - tambahkan Card + Avatar di dalam Box
   8. STEP C-JSX - tambahkan Stack tombol di dalam CardContent kedua
   9. STEP D-JSX - tambahkan Divider + Grid statistik + Chip
   10. STEP E-JSX - aktifkan state & pseudo action di tombol
   11. STEP F - responsive: ganti nilai statis di sx jadi object
       breakpoint { xs, sm, md } (sudah dicontohkan di tiap step)
============================================================ */

// STEP A (uncomment pertama)
// import { Container, Box, Typography } from '@mui/material'

// STEP B (uncomment kedua)
// import { Avatar, Card, CardContent } from '@mui/material'

// STEP C (uncomment ketiga)
// import { Button, IconButton } from '@mui/material'
// import EditIcon from '@mui/icons-material/Edit'

// STEP D (uncomment keempat)
// import { Stack, Grid, Chip, Divider } from '@mui/material'

// STEP E (uncomment kelima — WAJIB sebelum pakai useState di bawah)
// import { useState } from 'react'

const Profile = () => {
    // STEP E-JSX: uncomment 2 baris state di bawah ini
    // const [isFollowing, setIsFollowing] = useState(false)
    // const [isEditing, setIsEditing] = useState(false)

    // STEP E-JSX: uncomment 2 fungsi pseudo action ini
    // const handleFollow = () => setIsFollowing((prev) => !prev)
    // const handleEdit = () => setIsEditing(true)

    return (
        <div>Profile</div>
    )

    /* ============================================================
       STEP A-JSX
       Ganti `return (<div>Profile</div>)` di atas dengan blok ini:
  
    return (
      <Container maxWidth="sm">
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" fontWeight={700}>
            Halaman Profile
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Belajar Material UI step by step
          </Typography>
  
          // -> taruh STEP B-JSX di sini, di dalam <Box> ini, di bawah Typography
  
        </Box>
      </Container>
    )
    ============================================================ */

    /* ============================================================
       STEP B-JSX
       Tempel blok ini di dalam <Box> dari STEP A, menggantikan
       komentar penanda "-> taruh STEP B-JSX di sini":
  
      <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 2 }}>
        <CardContent
          sx={{
            display: 'flex',
            // STEP F (responsive): flexDirection column di HP, row di layar lebih besar
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            textAlign: { xs: 'center', sm: 'left' },
            gap: 2,
          }}
        >
          <Avatar
            alt="User"
            src="/avatar.jpg"
            sx={{
              // STEP F (responsive): ukuran avatar mengecil di HP
              width: { xs: 64, sm: 80, md: 96 },
              height: { xs: 64, sm: 80, md: 96 },
            }}
          />
          <Box>
            <Typography variant="h6">Budi Santoso</Typography>
            <Typography variant="body2" color="text.secondary">
              Frontend Developer
            </Typography>
          </Box>
        </CardContent>
  
        <CardContent>
          // -> taruh STEP C-JSX di sini
          // -> lalu STEP D-JSX di bawahnya
        </CardContent>
      </Card>
    ============================================================ */

    /* ============================================================
       STEP C-JSX
       Tempel di dalam <CardContent> kedua (dari STEP B),
       menggantikan "-> taruh STEP C-JSX di sini":
  
      <Stack
        // STEP F (responsive): tombol menumpuk vertikal di HP
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1}
        sx={{ mb: 2 }}
      >
        <Button
          variant={isFollowing ? 'outlined' : 'contained'}
          onClick={handleFollow}
          fullWidth
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
        <Button variant="outlined" fullWidth>Message</Button>
        <IconButton color="primary" aria-label="edit profile" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
      </Stack>
  
      {isEditing && (
        <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
          Mode edit aktif (pseudo)
        </Typography>
      )}
    ============================================================ */

    /* ============================================================
       STEP D-JSX
       Tempel setelah STEP C-JSX, masih di dalam <CardContent> kedua:
  
      <Divider sx={{ my: 2 }} />
  
      <Grid container spacing={2}>
        <Grid xs={4}>
          <Typography variant="h6" align="center">120</Typography>
          <Typography variant="caption" align="center" display="block">Post</Typography>
        </Grid>
        <Grid xs={4}>
          <Typography variant="h6" align="center">3.2K</Typography>
          <Typography variant="caption" align="center" display="block">Followers</Typography>
        </Grid>
        <Grid xs={4}>
          <Typography variant="h6" align="center">180</Typography>
          <Typography variant="caption" align="center" display="block">Following</Typography>
        </Grid>
      </Grid>
  
      <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
        <Chip label="React" />
        <Chip label="Next.js" />
        <Chip label="MUI" />
      </Stack>
    ============================================================ */
}

export default Profile