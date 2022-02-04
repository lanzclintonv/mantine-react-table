import React, { FC } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { useMaterialReactTable } from '../useMaterialReactTable';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';

type Props = {};

export const MRT_ToggleFiltersButton: FC<Props> = () => {
  const { localization, setShowFilters, showFilters } = useMaterialReactTable();

  return (
    <Tooltip arrow title={localization?.toggleFilterButtonTitle ?? ''}>
      <IconButton
        aria-label={localization?.toggleFilterButtonTitle}
        onClick={() => setShowFilters(!showFilters)}
        size="small"
      >
        {showFilters ? <FilterListOffIcon /> : <FilterListIcon />}
      </IconButton>
    </Tooltip>
  );
};