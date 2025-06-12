import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface TabData {
    label: string;
    count: number;
    content: React.ReactNode;
}

interface CustomTabsProps {
    tabs: TabData[];
    initialTab?: number;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const CustomTabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`custom-tabpanel-${index}`}
            aria-labelledby={`custom-tab-${index}`}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
};

function a11yProps(index: number) {
    return {
        id: `custom-tab-${index}`,
        'aria-controls': `custom-tabpanel-${index}`,
    };
}

interface CustomTabLabelProps {
    label: string;
    count: number;
    selected: boolean;
}

const CustomTabLabel: React.FC<CustomTabLabelProps> = ({ label, count, selected }) => (
    <Box
        sx={{
            display: 'flex',
            width: 133,
            height: 56,
            padding: 2,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            flexShrink: 0,
        }}
    >
        <Box
            sx={{
                width: 16,
                height: 16,
                backgroundColor: selected ? '#1976d2' : '#ccc',
                borderRadius: '4px',
                flexShrink: 0,
            }}
        />
        <Typography
            variant="body2"
            fontWeight={700}
            color={selected ? '#1976d2' : '#333'}
            sx={{ textTransform: 'capitalize' }}
        >
            {label}
        </Typography>
        <Box
            sx={{
                backgroundColor: '#f5f5f5',
                color: '#333',
                px: 1,
                borderRadius: '10px',
                fontSize: 12,
                minWidth: 20,
                height: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
            }}
        >
            {count}
        </Box>
    </Box>
);

const CustomTabs: React.FC<CustomTabsProps> = ({ tabs, initialTab = 0 }) => {
    const [value, setValue] = React.useState(initialTab);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="custom styled tabs">
                    {tabs.map((tab, index) => (
                        <Tab
                            key={index}
                            label={
                                <CustomTabLabel
                                    label={tab.label}
                                    count={tab.count}
                                    selected={value === index}
                                />
                            }
                            {...a11yProps(index)}
                        />
                    ))}
                </Tabs>
            </Box>
            {tabs.map((tab, index) => (
                <CustomTabPanel key={index} value={value} index={index}>
                    {tab.content}
                </CustomTabPanel>
            ))}
        </Box>
    );
};

export default CustomTabs;
