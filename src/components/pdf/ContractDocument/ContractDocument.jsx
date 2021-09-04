import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    body: {
        fontSize: '12px'
    }
});

const ContractDocument = ({ body }) => {
    return ( 
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.body}>{body}</Text>
                </View>
            </Page>
        </Document>
    );
}
 
export default ContractDocument;