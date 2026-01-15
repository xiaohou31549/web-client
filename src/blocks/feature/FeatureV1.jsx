'use client';
import PropTypes from 'prop-types';

import { useState } from 'react';

// @mui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'motion/react';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import { CardMedia, List, ListItem } from '@mui/material';
import { Block } from '@mui/icons-material';

export default function FeatureV1({ heading, image, topics, explore, direction = 'row', secondaryBtn, actionBtn }) {
  const boxPadding = { xs: 3, md: 5 };
  const imagePadding = { xs: 3, sm: 4, md: 5 };

  const [value, setValue] = useState('1');

  // Handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack direction={{ md: direction, sm: 'column' }} spacing={{ xs: 3, sm: 5 }} sx={{ justifyContent: 'center' }}>
        <List>
          {heading && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Typeset {...{ heading, stackProps: { sx: { textAlign: 'center' } } }} />
            </motion.div>
          )}
          {topics.map(({ title }, index) => (
            <ListItem sx={{ display: 'block' }} key={index}>
              {title}
            </ListItem>
          ))}
          {explore && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              whileHover={{ scale: 1.06 }}
            >
              <ButtonAnimationWrapper>
                <Button variant="text" {...explore} />
              </ButtonAnimationWrapper>
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}
          >
            <Stack direction="row" sx={{ mt: 1, alignItems: 'center', justifyContent: 'flex-start', gap: 1.5 }}>
              {secondaryBtn && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.06 }}
                >
                  <ButtonAnimationWrapper>
                    <Button variant="outlined" {...secondaryBtn} />
                  </ButtonAnimationWrapper>
                </motion.div>
              )}
              {actionBtn && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.06 }}
                >
                  <ButtonAnimationWrapper>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
                      {...actionBtn}
                    />
                  </ButtonAnimationWrapper>
                </motion.div>
              )}
            </Stack>
          </motion.div>
        </List>

        <CardMedia component="img" sx={{ width: { md: 500, xs: '100%' } }} image={image} alt="Live from space album cover" />
      </Stack>
    </ContainerWrapper>
  );
}

FeatureV1.propTypes = { heading: PropTypes.string, caption: PropTypes.string, topics: PropTypes.array };
